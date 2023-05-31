import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{children}</strong>
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  );
};

export default Alert;
