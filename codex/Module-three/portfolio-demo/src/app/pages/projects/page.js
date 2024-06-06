import React from 'react';
import Work from '../../components/Work';

export default function Page() {
  return (
    <div>
      
      <h2>Project List</h2>

      <Work
        name="Citas Motivacionales"
        description="Click button, randomly shows a famous quote and author."
        link=""
        image=""
      />

      <Work
        name="RGB Color"
        description="Adjust the gradients to produce colors."
        link=""
        image=""
      />

      <Work
        name="To Do List"
        description="Cute App you can write a list."
        link=""
        image=""
      />

      <Work
        name="Lista de tareas"
        description="Notebook to write tasks."
        link=""
        image=""
      />

      <Work
        name="Cronometro"
        description="Timer that will stop and pause."
        link=""
        image=""
      />

    </div>
  );
}
