import styled from "@emotion/styled"
import React from "react"
import ImageUploading from "react-images-uploading"
import Stack from "@mui/material/Stack"

import ImageCards from "./imageCards"
import { Button } from "@mui/material"
import { postRequestApi } from "../utils"

const UpLoadImage = () => {
  const [images, setImages] = React.useState([])
  const maxNumber = 250
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)

    setImages(imageList)
  }

  console.log(images[0])
  const Container = styled("div")`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    height: 100%;
    display: flex;
  `



  const DropButton = styled("button")`
    position: relative;
    width: 100%;
    height: 200px;
    border: 2px dashed #9c27b0;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #935ce326;

    cursor: pointer;
  `

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <>
          <Container>
            <DropButton
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Cliquer ou faire glisser tes images ici!
            </DropButton>
          </Container>
          <Stack direction="row" spacing={2}>
            <Button onClick={onImageRemoveAll}>Supprimer tout</Button>

            <Button onClick={() => postRequestApi(images)}>Créer</Button>
          </Stack>

          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <ImageCards
                image={image.data_url}
                update={() => onImageUpdate(index)}
                deleteImage={() => onImageRemove(index)}
              />
            </div>
          ))}
        </>
      )}
    </ImageUploading>
  )
}

export default UpLoadImage
