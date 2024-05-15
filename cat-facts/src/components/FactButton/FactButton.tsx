import {Modal} from "../Modal/Modal.tsx";
import {useState} from "react";
import './FactButton.css'


export const  FactButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className="button-center">
            <button className="button-fact" onClick={openModal}>Факт о котике</button>
            {isModalOpen && <Modal onClose={closeModal} />}
        </div>
    );
}