/// <reference types="aws-sdk" />

import styled from "@emotion/styled";
import { Card, IconButton, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import * as AWS from "aws-sdk";
import { addImage, removeImage } from "../../store/orderReducer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppContext } from "../../context/AppContext";

function initAws(poolId: string) {
  AWS.config.update({
    region: "eu-central-1",
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: poolId,
    }),
  });
}

function createFolderPath(name: string) {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const album = name;
  return `public/${year}/${month}/${day}/${album}/`;
}

export const ImageUploader = () => {
  const images = useSelector<AppState, string[]>((state) => state.order.images);
  const name = useSelector<AppState, string>((state) => state.order.customer.lastName) || "no";
  const {
    state: { moduleProperties },
  } = useAppContext();

  const [showLoading, setShowLoading] = useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (moduleProperties) {
      const { awsPoolId } = moduleProperties;
      initAws(awsPoolId!);
    }
  }, []);

  function onFilesChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files) {
      const promises = new Array<Promise<AWS.S3.ManagedUpload.SendData>>();
      setShowLoading(true);
      const path = createFolderPath(name);

      [...files].forEach((file, index) => {
        const upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: "umzug.meister",
            Key: path.concat(file.name),
            Body: file,
          },
        });
        const promise = upload.promise();
        promises.push(promise);

        promise
          .then((data) => {
            dispatch(addImage({ imageUrl: data.Location }));
          })
          .catch((err) => console.log(err));
      });

      Promise.all(promises).then(() => {
        setShowLoading(false);
      });
    }
  }

  function onRemove(url: string) {
    dispatch(removeImage({ imageUrl: url }));
  }

  const props = { images, onFilesChange, onRemove, showLoading };
  return <ImageUploaderRenderer {...props} />;
};

interface Props {
  images: string[];
  onRemove(url: string): void;
  onFilesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showLoading: boolean;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Previews = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ImageUploaderRenderer: React.FC<Props> = ({
  onFilesChange,
  images,
  onRemove,
  showLoading,
}) => {
  return (
    <Root>
      <InputLabel>
        Laden Sie die Bilder hoch um ein schnellers und präziseres Angebot zu erhalten!
      </InputLabel>
      <InputWrapper>
        {showLoading ? (
          <CircularProgress />
        ) : (
          <input onChange={onFilesChange} accept="image/*" multiple type="file"></input>
        )}
      </InputWrapper>
      <Previews>
        {images.map((url) => {
          return <ImagePreview url={url} key={url} onRemove={() => onRemove(url)} />;
        })}
      </Previews>
    </Root>
  );
};

const ImageWrapper = styled.div`
  height: 8rem;
  width: 8rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  position: relative;
`;

const RemoveButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const ImagePreview: React.FC<{ url: string; onRemove: Function }> = ({ url, onRemove }) => {
  return (
    <Card>
      <ImageWrapper>
        <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={url} alt="image1" />
        <RemoveButtonWrapper>
          <IconButton
            onClick={(_ev) => {
              onRemove();
            }}
            color="error"
          >
            <DeleteOutlineIcon />
          </IconButton>
        </RemoveButtonWrapper>
      </ImageWrapper>
    </Card>
  );
};
