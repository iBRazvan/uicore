import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardComponent({
  data,
  post,
  handleModal,
  setCurrentId,
  deletePost,
}) {
  const [postData, setPost] = useState(post);
  const sources = postData.source;

  const handleEdit = () => {
    handleModal();
    setCurrentId(postData.id);
  };

  const handleDelete = () => {
    deletePost(postData.id);
  };

  useEffect(() => {
    const updatedPost = data.find((postData) => postData.id === post.id);
    setPost(updatedPost);
  }, [data, post.id]);

  return (
    <Card sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://ui-avatars.com/api/?name=${postData.username}/`}
        sx={{
          align: "center",
          position: "absolute",
          borderRadius: "99%",
          transform: "translateX(-50%)",
          top: "20px",
          left: "10%",
          width: 100,
          height: 100,
        }}
      />
      <CardContent className="flex flex-row gap-20 max-w-[800px] h-full sm:flex-col sm:items-center pt-10 bg-red-950 ">
        <CardContent className="flex flex-col justify-start pt-[100px] sm:items-center w-full">
          <Typography gutterBottom variant="h5" component="div">
            Name
          </Typography>
          <Typography variant="h7" color="div">
            {`${postData.username}`}
          </Typography>
        </CardContent>
        <div className="flex flex-col ">
          <div className="flex flex-row max-w-[600px]">
            <CardContent className="flex flex-col justify-start gap-5">
              <div className="flex flex-col ">
                <Typography variant="h5">Access</Typography>
                <Typography variant="h7">{`${postData.access}`}</Typography>
              </div>
              <div className="flex flex-col">
                <Typography variant="h5" component="div">
                  Purpose
                </Typography>
                <Typography variant="h7" color="div">
                  {`${postData.purpose}`}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography variant="h5" component="div">
                  Mode
                </Typography>
                <Typography variant="h7" color="div">
                  {`${postData.mode}`}
                </Typography>
              </div>
            </CardContent>
            <CardContent className="flex flex-col justify-start gap-5">
              <div className="flex flex-col ">
                <Typography variant="h5">Reference</Typography>
                <Typography variant="h7">
                  {" "}
                  {`${
                    !postData.reference?.length
                      ? "No reference"
                      : postData?.reference
                  }`}
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography variant="h5" component="div">
                  Limit chat:
                </Typography>
                <Typography variant="h7" color="div">
                  {`${postData.limit}`} messages
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography variant="h5" component="div">
                  Context size:
                </Typography>
                <Typography variant="h7" color="div">
                  {`${postData.context}`}
                </Typography>
              </div>
            </CardContent>
          </div>
          <CardContent className="flex flex-col justify-center items-center w-full">
            <Typography variant="h5" component="div">
              Sources
            </Typography>
            <Typography variant="h7" color="div">
              {`${
                !sources?.length
                  ? "No sources"
                  : sources?.map((source) => source.name)
              }`}
            </Typography>
          </CardContent>
        </div>
      </CardContent>

      <CardActions className="flex justify-center">
        <Button
          onClick={handleEdit}
          size="small"
          sx={{ color: "black", size: "25px", fontFamily: "bold" }}
          className="focus:bg-black hover:bg-black hover:text-white focus:text-white "
        >
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          size="small"
          sx={{ color: "black", size: "25px", fontFamily: "bold" }}
          className="focus:bg-black hover:bg-black hover:text-white focus:text-white "
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
