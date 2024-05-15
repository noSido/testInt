import { fetchCatFact } from '../../api/fetchCatFact.ts';
import { useQuery } from 'react-query';
import React from 'react';
import './Modal.css';


interface ModalProps {
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const { data, isLoading, isError } = useQuery(
        'fact',
        fetchCatFact,
        {
            refetchOnWindowFocus: false,
            cacheTime: 0
    });

    if (isLoading) {
        return <div>Идёт загрузка...</div>;
    }

    if (isError) {
        return <div>Произошла ошибка!</div>;
    }

    if (!data) {a
        return <div>Данные о котиках потерялись...</div>
    }

    return (
        <div className="modal">
            <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
                <p>{data?.fact}</p>
            </div>
        </div>
    );
};
