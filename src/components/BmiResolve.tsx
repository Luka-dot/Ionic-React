import React from 'react';
import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';

import './BmiResolve.css';

const BmiResolve: React.FC<{ result: number }> = props => {

  return (
    <IonCard id="result">
      <IonCardContent>
        <h2 className="ion-text-center">Your body-mass-index</h2>
        <h3 className="ion-text-center">{props.result.toFixed(2)}</h3>
      </IonCardContent>
    </IonCard>
  )
}

export default BmiResolve;