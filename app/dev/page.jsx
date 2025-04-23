'use client'

import 'intro.js/introjs.css';
import { Steps, Hints } from 'intro.js-react';
import DropFileButton from "../../components/buttons/DropFileButton";
import { Button } from "@mui/material";
import { useState } from 'react';

export default function DevPage() {
    const [intro, setIntro] = useState(false);
    

    return (
      <>
        <Steps
          enabled={intro}
          initialStep={0}
          steps={[
            {
              element: ".hello",
              intro: "Hello step",
            },
            {
              element: ".world",
              intro: "World step",
            },
          ]}
          onExit={() => setIntro(false)}
        />
        <div
          
          className="hello"
        >
          <h1>Dev Page</h1>
          <DropFileButton />
        </div>
        <Button className='world'>
          Yo
        </Button>
        <Button>Another Yo</Button>
        <Button>Yet Another Yo</Button>
        <Button onClick={() => setIntro(true)}>Live Demo</Button>
      </>
    );
}