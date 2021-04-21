
function readFileSync(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.send(null);
   return rawFile.responseText;
}

const file = readFileSync('../apiary.apib');

const embed = new Apiary.Embed({ apiBlueprint: file });

