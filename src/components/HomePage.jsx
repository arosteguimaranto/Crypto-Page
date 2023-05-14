

export const HomePage = () => {
    return (
      <div className="bg-gray-200 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a la discografía de Lady Gaga</h1>
        <p className="text-lg text-center">Explora la increíble carrera musical de Lady Gaga, desde su primer álbum "Red and Blue" hasta sus éxitos más recientes.</p>
        <a href="./AlbumsSection.jsx" className="bg-pink-700 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-8">Ver Álbumes</a>
      </div>
    );
  }
