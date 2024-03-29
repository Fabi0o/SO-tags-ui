import { Alert } from "@mui/material";

type Props = {
  msg: string;
};

function ErrorAlert({ msg }: Props) {
  return <Alert severity="error">{msg}</Alert>;
}

export default ErrorAlert;
