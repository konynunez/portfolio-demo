import React from 'react';
import Work from '../../components/Work';

export default function Page() {
  return (
    <div>
      <hr className="mx-5"></hr>
      <main style={{minHeight: "80vh"}}>
      <h2 className="text-3xl text-center my-10 italic font-bold">Projects Page</h2>
      
      <div>
      <Work
        name={"Citas Motivacionales"}
        description={"Click button, randomly shows a famous quote and author"}
        link={""}
        image={""}
      />

      <Work
        name={"RGB Color"}
        description={"Adjust gradients to produce colors"}
        link={""}
        image={""}
      />

      <Work
        name={"To Do List"}
        description={"Cute App to write a list"}
        link={""}
        Image={""}
      />

      <Work
        name={"Lista de tareas"}
        description={"Notebook to write tasks"}
        link={""}
        image={""}
      />

      <Work
        name={"Cronometro"}
        description={"Timer that will stop and pause."}
        Link={""}
        image={""}
        />
        </div>
      </main>
    </div>
  );
}