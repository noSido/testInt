import { fetchCatFact } from '../../api/fetchCatFact.ts';
import { useQuery } from 'react-query';
import React from 'react';
import './Modal.css';


interface ModalProps {
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const { data, isLoading, isError, refetch } = useQuery(
        'fact',
        fetchCatFact,
        {
            refetchOnWindowFocus: false,
            cacheTime: 0
    });

    const handleRefetch = () => {
        refetch();
    };

    if (isLoading) {
        return <div className="loading"></div>;
    }

    if (isError) {
        return <div className="error"><button className="error-button" onClick={handleRefetch}> Произошла ошибка! <br/> Повторить запрос...</button></div>;
    }

    if (!data) {
        return <div className="lost-data"><button className="lost-data--button" onClick={handleRefetch}>Данные о котиках потерялись! <br/>Повторить запрос...</button></div>
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
