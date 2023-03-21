loadMore = () => {
    table = document.getElementById("explore");
    let i = Math.floor(Math.random() * 100);
    let category = ['anime', 'nature', 'people', 'smile', 'monuments', 'sports', 'movies', 'food', 'fashion']
    appendHTML = `<tr>
    <td><img src="https://source.unsplash.com/random/200x200/?${category[Math.floor(Math.random()*9)]}&${i+1}" alt=""></td>
    <td><img src="https://source.unsplash.com/random/200x200/?${category[Math.floor(Math.random()*9)]}&${i+2}" alt=""></td>
    <td rowspan="2"><img src="https://source.unsplash.com/random/200x400/?${category[Math.floor(Math.random()*9)]}&${i+3}" alt=""></td>
</tr>
<tr>
    <td><img src="https://source.unsplash.com/random/200x200/?&${i+4}" alt=""></td>
    <td><img src="https://source.unsplash.com/random/200x200/?&${i+5}" alt=""></td>
</tr>
<tr>
    <td rowspan="2"><img src="https://source.unsplash.com/random/200x400/?&${i+10}" alt=""></td>
    <td><img src="https://source.unsplash.com/random/200x200/?${category[Math.floor(Math.random()*9)]}&${i+6}" alt=""></td>
    <td><img src="https://source.unsplash.com/random/200x200/?&${i+7}" alt=""></td>
</tr>
<tr>
    <td><img src="https://source.unsplash.com/random/200x200/?${category[Math.floor(Math.random()*9)]}&${i+8}" alt=""></td>
    <td><img src="https://source.unsplash.com/random/200x200/?${category[Math.floor(Math.random()*9)]}&${i+9}" alt=""></td>
</tr>`
    table.innerHTML += appendHTML;
}


window.onload = () => {
    loadMore();
    loadMore();
}

