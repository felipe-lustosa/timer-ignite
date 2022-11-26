interface ButtonProps {
  color?: "primary" | "secondary" | "danger" | "success";
}

export function Button({ color }: ButtonProps) {
  return <button>Enviar</button>;
}
