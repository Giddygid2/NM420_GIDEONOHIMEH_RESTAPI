// async function getData() {
//     try 
//     {
        
//     } catch (error) {
//         console.log ("Error:",error);
//     }
// }
// getData();


async function searchWord() {
    const word = document.getElementById('word').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (word.trim() === '') {
        resultDiv.innerHTML = '<p>Please enter a word.</p>';
        return;
    }

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (data.title === 'No Definitions Found') {
            resultDiv.innerHTML = '<p>No definitions found.</p>';
        } else {
            const definition = data[0].meanings[0].definitions[0].definition;
            resultDiv.innerHTML = `
                <article>
                    <h3>${word}</h3>
                    <p>${definition}</p>
                </article>
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = '<p>Error fetching the definition. Please try again later.</p>';
    }
}

