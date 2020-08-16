const button = document.getElementById('submit');
        button.addEventListener('click', function () {

            const SearchCity = document.getElementById('inputValue').value;
            let apiKey = "90945550f96fb64ed21d35649e2cceb2"
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${SearchCity}&appid=${apiKey}`)


                .then(resp => resp.json())
                .then(data => {
                    console.log(data)

                    const cityName = document.getElementById('current_name').innerText = data.name;
                    /*
                    we know  that 1deg c = 273.15
                    c = k-273
                    */
                    const temp = document.getElementById('current_temp').innerText = Math.round(data.main.temp - 273.15);
                    const desc = document.getElementById('discreption').innerText = data.weather[0].main;

                    const iconCode = data.weather[0].icon;
                    iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                    document.getElementById('icon').src = iconUrl;

                })
                .catch(err => alert('wrong city'))
        })

        const personalBolog = document.getElementById('hideBlog');
        personalBolog.addEventListener('click', function(){
            document.getElementById('blog').style.display = 'none';
        })

    </script>
</body>

</html>