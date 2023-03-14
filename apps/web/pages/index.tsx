import { Button } from "ui";
import Image from 'next/image'

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Image src="/car.png" alt="me" width="64" height="64" />
      <Button />
    </div>
  );
}
