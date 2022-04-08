import React from 'react';

const Characters = () => {
    const [characters, setCharacters] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const fetchCharacters = () => {
        setIsLoading(true);
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCharacters(data.results);

                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
                setIsLoading(false);
            });
    };

    React.useEffect(() => {
        fetchCharacters();
    }, []);

    if (isLoading) {
        return <div style={{ color: '#FFF', fontSize: 48 }}>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    return (
        <div>
            {characters.map((character) => (
                <div key={character.id}>{character.name}</div>
            ))}
        </div>
    );
};

export default Characters;
