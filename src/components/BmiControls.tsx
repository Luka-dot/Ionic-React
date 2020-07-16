import React from 'react';
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BmiControls: React.FC<{ onCalculate: () => void; onReset: () => void }> = props => {


    return (
        <IonRow className="ion-margin-top">
            <IonCol size="12" size-md="6" className="ion-text-center">
                <IonButton size="large" expand="block" color="primary" onClick={props.onCalculate}>
                    <IonIcon slot="start" icon={calculatorOutline} />
              Calculate
            </IonButton>
            </IonCol>
            <IonCol size="12" size-md="6" className="ion-text-center">
                <IonButton size="large" color="secondary" onClick={props.onReset} fill="clear">
                    <IonIcon slot="start" icon={refreshOutline} />
              Reset
            </IonButton>
            </IonCol>
        </IonRow>
    )
}

export default BmiControls;