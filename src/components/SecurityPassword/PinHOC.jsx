import {useState} from "react";

export const PIN_SIZE = 6;

export const clearPins = ()=>Array(PIN_SIZE).fill('')

export const PinHOC = (Component) => (props) => {

    const PinHOCComponent= ()=>{
        const [pin, setPin] = useState(clearPins());
        const [currentItem,setCurrentItem] = useState(0);
        const [errorCode,setErrorCode] = useState(false);

        const clearPin = ()=>{
            setPin(clearPins())
            setCurrentItem(0);
            setErrorCode(false);
        }




        const handleButton = (val) =>{
            if(currentItem<PIN_SIZE) {
                const newItem = currentItem + 1;
                const newPin = [...pin];
                newPin[currentItem] = val;
                setPin(newPin);
                setCurrentItem(newItem);
            }
        }

        const handleDelete = ()=> {
            if(currentItem>=0) {
                const newPin = [...pin];
                const newItem = currentItem - 1;
                for(let i = newItem;i<PIN_SIZE;i++) {
                    newPin[i] = '';
                }
                setPin(newPin);
                setCurrentItem(newItem<0?0:newItem)
            }
        }

        return <Component
            handleDelete={handleDelete}
            handleButton={handleButton}
            clearPins={clearPin}
            pin={pin}
            setPin={setPin}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            errorCode={errorCode}
            setErrorCode={setErrorCode}
            {...props} />;
    }

    return <PinHOCComponent />;
};