# Response headers

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

## Stap 3: Eerste headers toevoegen

- Als je in de browser je dev tools opent en navigeert naar de Blog-pagina, zul je tegen een CORS error aanlopen.
- Om deze error op te lossen moeten we naar de `Program.cs` en hier voor het initialiseren van de `app` eerst een CORS policy toevoegen die ervoor zorgt dat de Backend niet langer de requests vanuit de Frontend blokkeert.
- Vervolgens moet je ervoor zorgen dat `app` ook daadwerkelijk gebruik maakt van deze policy.
- Als je nu de Backend opnieuw opstart zul je zien dat de CORS error verdwenen is. Ook zul je bij het response nu een `Access-Control-Allow-Origin` header zien.

## Stap 4: OWASP ZAP GET request

- Start OWASP ZAP op, en navigeer via `snelle start` naar `Automated scan`.
- Vul de URL in van je posts endpoint.
- Selecteer `Use traditional spider`.
- Start vervolgens de aanval.
- Zodra de aanval klaar is, zul je linksonderin een aantal waarschuwingen krijgen over response headers.
- Nu is het aan jou om deze waarschuwingen weg te werken, zodat deze bij een volgende scan niet meer terugkomen. Richt je hierbij alleen op de waarschuwingen die over de `/api/posts` URL gaan.

## Stap 5: OWASP ZAP POST request

- Voor het uitvoeren van een `Automated scan` op een `POST request` heeft OWASP ZAP een formulier nodig. Dit formulier is beschikbaar in de Frontend.
- Navigeer nogmaals naar `Automated scan` in OWASP ZAP.
- Vul de URL in van de contact pagina waarin het formulier te vinden is.
- Selecteer `Use traditional spider`.
- Start vervolgens de aanval.
- Zodra de aanval klaar is, zul je ook voor dit request een aantal waarschuwingen krijgen over reponse headers. Richt je hierbij alleen op de waarschuwingen die over de `/contact` URL gaan.
