
document.addEventListener("DOMContentLoaded", function(){

    fetch('Robert-Hooke.json')

        .then(response => response.json())
        .then(data => {
            
            let itens = '';

            data.RobertHooke.forEach(robert => {

                itens += `
                    <div class="card">
                        <img src="${ robert.Image }">
                        <a href="${  robert.Image }" class="download" download>Download</a>
                    </div>
                `;

            });
            document.getElementById('main').innerHTML = itens;
        })
        .catch(error = console.error('Error to load the images: ', error));
});