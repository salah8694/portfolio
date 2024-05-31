import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Avis.css';
import axios from 'axios';

interface AvisInputs {
  nom: string;
  email: string;
  rating: number;
  commentaires: string;
}

interface Avis {
  nom: string;
  email: string;
  rating: number;
  commentaires: string;
  date: string;
}

const Avis: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<AvisInputs>();
  const [rating, setRating] = useState<number>(0);
  const [avis, setAvis] = useState<Avis[]>([]);
  const [submittedAvis, setSubmittedAvis] = useState<Avis | null>(null);

  useEffect(() => {
    // Fetch existing reviews when component mounts
    axios.get('http://localhost:8000/api/avis/')
      .then(response => {
        const sortedAvis = response.data.sort((a: Avis, b: Avis) => b.rating - a.rating);
        setAvis(sortedAvis);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des avis:', error);
      });
  }, []);

  const onSubmit: SubmitHandler<AvisInputs> = data => {
    data.rating = rating;
    console.log("Sending data:", data);

    axios.post('http://localhost:8000/api/avis/', data)
      .then(response => {
        console.log('Avis posté avec succès:', response.data);
        setSubmittedAvis(response.data);

        // Ajouter le nouvel avis à la liste existante des avis et trier
        const updatedAvis = [...avis, response.data].sort((a, b) => b.rating - a.rating);
        setAvis(updatedAvis);

        // Réinitialiser le formulaire après soumission
        setValue('nom', '');
        setValue('email', '');
        setRating(0); // Réinitialiser le rating
        setValue('commentaires', '');
      })
      .catch(error => {
        if (error.response) {
          console.error('Erreur lors de l\'envoi de l\'avis:', error.response.data);
          console.error('Status code:', error.response.status);
        } else if (error.request) {
          console.error('Aucune réponse reçue:', error.request);
        } else {
          console.error('Erreur', error.message);
        }
      });
  };

  const handleRating = (value: number) => {
    setRating(value);
    setValue('rating', value); // Mettre à jour la valeur du formulaire
  };

  return (
    <div className="Avis">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            id="nom"
            {...register('nom', { required: 'Saisissez votre nom' })}
            placeholder='Nom:'
          />
          {errors.nom && <span className="error">{errors.nom.message}</span>}
        </div>
        <div>
          <input
            id="email"
            type="email"
            placeholder='Email:'
            {...register('email', {
              required: 'Saisissez votre email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Email invalide',
              },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
        <div className="rating">
          Rating
          {[1, 2, 3, 4, 5].map((value) => (
            <div
              key={value}
              className={`circle ${rating >= value ? 'selected' : ''}`}
              onClick={() => handleRating(value)}
            ></div>
          ))}
        </div>
        {errors.rating && <span className="error">{errors.rating.message}</span>}
        <div>
          <textarea
            id="commentaire"
            placeholder='Commentaires:'
            {...register('commentaires', { required: 'Merci de laisser un commentaire' })}
          />
          {errors.commentaires && <span className="error">{errors.commentaires.message}</span>}
        </div>
        <button type="submit">Soumettre</button>
      </form>

      <div className='avisR'>
        <h1>Feedback<br/></h1>
        <p>N'hésitez pas a publier vos retours !</p>
        <div className="avisList">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Commentaires</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {avis.map((item, index) => (
                <tr key={index}>
                  <td className='N'>{item.nom}</td>
                  <td className='C'>{item.commentaires}</td>
                  <td className='R'>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        className={`circle ${item.rating >= value ? 'selected' : ''}`}
                      ></span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Avis;





