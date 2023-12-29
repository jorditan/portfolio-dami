
"use client";
import { Avatar, Card } from "keep-react";

function CardOpinion({ opinion }) {
  return (
    <>
      <Card className="max-w-md p-6 md:max-w-lg sombra">
        <Card.Description>
          {opinion.texto}
        </Card.Description>
        <Card.Container className="flex items-center">
          <Avatar size="lg" shape="circle" img="https://randomuser.me/api/portraits/men/11.jpg" />
          <Card.Container className="ml-3">
            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">{opinion.alumno}</Card.Title>
            <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">{opinion.genero}</Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
}

export default CardOpinion;