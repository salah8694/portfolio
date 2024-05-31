import SyntaxHighlighter from 'react-syntax-highlighter';
import {atelierCaveDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Windows.css';

const Windows = () => {
 const codeString = ` README d'installation de l'application Portfolio 

 Ce portfolio contient mes projets, 
 compétences et expériences en développement web et logiciel.

I°) Installation

 Pour télécharger et exécuter ce portfolio localement sur votre
 machine, suivez ces étapes :

 1.Télécharger le fichier et dézippez l'archive.

 2. Accédez au répertoire du projet :
    cd portfolio

 3. Installez les dépendances nécessaires en utilisant npm ou pnpm :
    npm install
      # ou
    pnpm install


II°) Exécution en mode développement

 Une fois les dépendances installées, vous pouvez exécuter le portfolio
 en mode développement en suivant ces étapes :

 1. Accédez au répertoire src :

     cd src

 2. Lancez l'application en mode développement :

     npm run dev
       # ou
     pnpm run dev

 Cela démarrera l'application en mode développement. 
 Vous pourrez ensuite accéder à votre portfolio dans votre 
 navigateur à l'adresse suivante : http://localhost:port.
`;



  return (
    
              
                <div className="code-editor">
                  <div className="line-numbers">
                    {codeString.split('\n').map((_, index) => (
                      <span key={index} className="line-number">{index + 1}</span>
                    ))}
                  </div>
                  <SyntaxHighlighter language="javascript" style={atelierCaveDark} >
                    {codeString}
                  </SyntaxHighlighter>
                </div>    
              
            
  )
}

export default Windows