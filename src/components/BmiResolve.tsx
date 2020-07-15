import React from 'react';
import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';

import './BmiResolve.css';

const BmiResolve: React.FC<{result: number }> = props => {

    return (
        <IonRow>
            <IonCol>
              <IonCard color="secondary" >
                <IonCardContent>
                    <h2 className="ion-text-center">Your body-mass-index</h2>
                  <h3 className="ion-text-center">{props.result.toFixed(2)}</h3>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
    )
}

export default BmiResolve;