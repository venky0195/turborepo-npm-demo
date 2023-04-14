import { Button } from "ui";
import Image from 'next/image'

export default function Web() {
  return (
    <div>
      <h1>Car</h1>
      <Image src="/car.png" alt="me" width="800" height="400" />
      <br />
      <Button />
    </div>
  );
}
