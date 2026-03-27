# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Dawid Moskalik, Mikołaj Smoliniec
**Klasa:** 3 Technikum
**Data:** A kij wie

---
## 1. Analiza wymagań klienta
(Opisz własnymi słowami, jakie funkcjonalności musiały znaleźć się w aplikacji na podstawie e-maila od klienta).
Obliczanie ceny dla różnego rodzaju łódek, wraz z opcjami dodatkowymi.
Walidacja formularzy.

---
## 2. Architektura rozwiązania
Podzielilismy kod na sekcje Formularza (Form.ts) i App.ts.
Cała funkcjonalność komponentu Form znajduje się w oddzielnym pliku dla skalowności i czytelności.

* **Cena bazowa:** W zaleznosci od wyboru w liscie.
* **Wpływ godzin:** Kazda godzina proporcjonalnie dodaje do ceny.
* **Opcje dodatkowe:** Na sam koniec, a instruktora przemnazamy przez x godzin.
---
## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. `display: flex` - wlaczamy flexboxa
2. `justify-content` - wyrownanie w poziomie
3. `align-items` - wyrownanie w pionie
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?** Dogadanie się z partnerem.
* **Czego nowego się nauczyliście?** Dodatkowe properties flexboxa + formularzy.
* **Co byście zmienili, gdybyście mieli więcej czasu?** Więcej walidacji formularzy, może podpięcie do jakiejś bazy, animacje.
---
## 7. Checklisty (Zaznacz [x])
- [ X ] Aplikacja uruchamia się bez błędów (npm start).
- [ X ] Konsola przeglądarki jest czysta (brak "red errors").
- [X] Wszystkie commity są widoczne na kanale #github-feed.
- [X] Pull Requesty zostały zaakceptowane przez partnera.
