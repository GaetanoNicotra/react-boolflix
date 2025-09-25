# 🎬 BOOLFLIX

**BOOLFLIX** è una web application sviluppata in **React** che consente agli utenti di cercare e visualizzare informazioni su **film** e **serie TV** tramite l'API di [The Movie Database (TMDb)](https://www.themoviedb.org/). L'interfaccia utente è ispirata a Netflix, con uno stile moderno e responsive.

---

## 🧩 Descrizione del Progetto

L'applicazione permette di effettuare ricerche in tempo reale, mostrando i risultati suddivisi in due sezioni: **Film** e **Serie TV**. Ogni elemento è rappresentato tramite una card contenente immagine, titolo, overview, lingua originale (rappresentata con la **bandiera del paese**), titolo originale e voto medio convertito in una scala da 1 a 5.

La UI è stata sviluppata utilizzando **Bootstrap** per il layout e **Font Awesome** per le icone.

---

## ✨ Funzionalità principali

- Ricerca film e serie TV 
- Visualizzazione dettagliata dei contenuti:
  - Poster
  - Titolo e titolo originale
  - Overview
  - Lingua originale con bandiera tramite `react-country-flag`
  - Voto medio su 5
- Interfaccia responsive e ottimizzata per mobile
- Hover sulle card per rivelare le informazioni

---

## 🧠 Logica di funzionamento

- Utilizzo dell'API di TMDb per ottenere i risultati di film e serie TV in base alla query dell’utente
- Uso di `useState` per gestire input, risultati film e risultati serie
- Funzione `flags(code)` per convertire i codici lingua in country code e mostrare le bandiere
- Conversione del voto medio da scala 10 a scala 5

---


