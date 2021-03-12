window.onload = function () {
    fetch("https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=BL%20%3D%20%27HAMBURG%27&outFields=*&returnGeometry=false&outSR=4326&f=json")
        .then(response => response.json())
        .then(data => {
            var cases = data.features[0].attributes.cases;
            var cases7_per_100k = Math.round(data.features[0].attributes.cases7_per_100k);
            var deaths = data.features[0].attributes.deaths;
            var last_update = data.features[0].attributes.last_update;
            var EWZ = data.features[0].attributes.EWZ;
            document.getElementById("cases").value = cases;
            document.getElementById("cases7_per_100k").value = cases7_per_100k;
            document.getElementById("deaths").value = deaths;
            document.getElementById("last_update").value = last_update.split(",")[0];
            document.getElementById("EWZ").value = EWZ;
        })

    fetch("https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=BundeslandId%20=%202&outFields=*&outSR=4326&f=json")
        .then(response => response.json())
        .then(data => {
            var AnzFallNeu = data.features[0].attributes.AnzFallNeu;
            document.getElementById("AnzFallNeu").value = AnzFallNeu;
            var AnzTodesfallNeu = data.features[0].attributes.AnzTodesfallNeu;
            document.getElementById("AnzTodesfallNeu").value = AnzTodesfallNeu;
            var AnzGenesenNeu = data.features[0].attributes.AnzGenesenNeu;
            document.getElementById("AnzGenesenNeu").value = AnzGenesenNeu;
            var AnzGenesen = data.features[0].attributes.AnzGenesen;
            document.getElementById("AnzGenesen").value = AnzGenesen;
            var AnzGenesenNeu = data.features[0].attributes.AnzGenesenNeu;
            document.getElementById("AnzGenesenNeu").value = AnzGenesenNeu;
        })
}
