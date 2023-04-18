import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const InputText = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },

  "& .MuiInputBase-input": {
    borderRadius: 4,
    display: "flex",
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      boxShadow: `${alpha("#bf0d00", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#bf0d00",
    },
  },
}));

export default function StyledCustomization() {
  return <InputText />;
}
