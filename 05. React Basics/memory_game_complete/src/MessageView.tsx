type Props = { message: string };

export default function MessageView({ message }: Props) {
  return <p className="message">{message}</p>;
}
