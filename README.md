# Response headers

## Voorbereiding

- Clone of download de startercode.

## Stap 1: Installeer OWASP ZAP

- Ga naar [OWASP ZAP](https://www.zaproxy.org/download/) en installeer dit programma.

## Stap 2: Start de Front en Backend

- Open de frontend folder in Visual Studio Code en run:

  ```bash
   cd client
   npm install
   npm run dev
  ```

- Open de ResponseHeadersWorkshop solution in Visual Studio en execute dit project.

## Stap 3: Eerste headers toevoegen (`program.cs`)

- Als je in de browser je dev tools opent en navigeert naar de Blog-pagina, zul je tegen een CORS error aanlopen.
- Om deze error op te lossen moeten we naar de `Program.cs` en hier **voor** het initialiseren van de `app` eerst een CORS policy toevoegen die ervoor zorgt dat de Backend niet langer de requests vanuit de Frontend blokkeert.
- Zorg ervoor dat je in de policy **niet alleen `GET`, maar ook `POST` requests toestaat.**
- Vervolgens moet je ervoor zorgen dat `app` ook daadwerkelijk gebruik maakt van deze policy.
- Als je nu de Backend opnieuw opstart zul je zien dat de CORS error verdwenen is. Ook zul je bij het response nu een `Access-Control-Allow-Origin` header zien.

## Stap 4: OWASP ZAP GET request (`program.cs`)

- Start OWASP ZAP op, en navigeer via `snelle start` naar `Automated scan`.
- Vul de volgende URL in: `https://localhost:7076/api/posts`.
- Selecteer `Use traditional spider`.
- Start vervolgens de aanval.
- Zodra de aanval klaar is, zul je linksonderin een aantal waarschuwingen krijgen.
- Nu is het aan jou om deze waarschuwingen weg te werken, zodat deze bij een volgende scan niet meer terugkomen (Verwijder tussen de scans door wel even de waarschuwing). Richt je hierbij alleen op de response header waarschuwingen die over `https://localhost:7076/api/posts` gaan.

## Stap 5: OWASP ZAP POST request (`vite.config.js`)

- Voor het uitvoeren van een `Automated scan` op een `POST request` heeft OWASP ZAP een formulier nodig. Dit formulier is beschikbaar in de Frontend.
- Navigeer nogmaals naar `Automated scan` in OWASP ZAP.
- Vul de volgende URL in: `http://localhost:5173/contact`. (let op als je localhost draait op een andere port)
- Maak hierbij gebruik van `Ajax Spider`.
- Start vervolgens de aanval.
- Zodra de aanval klaar is, zul je ook voor dit request een aantal waarschuwingen krijgen. Om deze waarschuwingen weg te werken zul je response headers moeten toevoegen in `vite.config.js`. Richt je hierbij alleen op de response header waarschuwingen die over `http://localhost:5173/contact` gaan.
