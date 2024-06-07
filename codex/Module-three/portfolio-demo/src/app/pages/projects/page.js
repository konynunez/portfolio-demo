import React from 'react';
import Work from '../../components/Work';

export default function Page() {
  return (
    <div>
      <hr className="mx-5" />
      <main style={{ minHeight: '80vh' }}>
        <h2 className="text-3xl text-center my-10 italic font-bold text-red-600">Projects Page</h2>
        <h3 className="text-center">Click on the image to go to the GitHub Repository</h3>
        <div className="flex flex-wrap justify-center">
          <Work
            name="Citas Motivacionales"
            description="Click button, randomly shows a famous quote and author"
            link="https://github.com/konynunez/portfolio-demo/tree/8b88b0f8a196f2d3c28bc0902cc07c9eabd57926/Practice/Cursojs/citas-motivacionales"
            image="/images/citas.png"
          />

          <Work
            name="RGB Color"
            description="Adjust gradients to produce colors"
            link="https://github.com/konynunez/portfolio-demo/tree/8b88b0f8a196f2d3c28bc0902cc07c9eabd57926/Practice/Cursojs/input-color-rgb"
            image="/images/rgb.png"
          />

          <Work
            name="To Do List"
            description="Cute App to write a list"
            link="https://github.com/konynunez/portfolio-demo/tree/8b88b0f8a196f2d3c28bc0902cc07c9eabd57926/Practice/Cursojs/todoList"
            image="/images/todo.png"
          />

          <Work
            name="Lista de tareas"
            description="Notebook to write tasks"
            link="https://github.com/konynunez/portfolio-demo/tree/8b88b0f8a196f2d3c28bc0902cc07c9eabd57926/Practice/Cursojs/Lista-de-tareas"
            image="/images/tareas.png"
          />

          <Work
            name="Cronometro"
            description="Timer that will stop and pause"
            link="https://github.com/konynunez/portfolio-demo/tree/8b88b0f8a196f2d3c28bc0902cc07c9eabd57926/Practice/Cursojs/Cronometro"
            image="/images/cronometro.png"
          />
        </div>
      </main>
    </div>
  );
}
