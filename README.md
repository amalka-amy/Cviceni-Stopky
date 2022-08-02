# Cvičení: Stopky

Vytvoř webovou stránku, která bude ukazovat počet uběhlých vteřin.

1. Přichystej si `index.html` a případně soubor pro JavaScriptový kód.

1. Do HTML vepiš číslo `0` tak, aby se ukázalo na výsledné stránce.

1. Pomocí JavaScriptu zařiď, aby se toto číslo každu sekundu zvětšilo o jedna (`setInterval`). Stopky tedy budou měřit, před kolika sekundami návštěvník stránku otevřel.

## Bonusy

- Nepouštěj stopky hned s načtením stránky. Přidej pod čas tlačítko s textem `Start`. Počítání spusť až na jeho kliknutí.

- Číslo vypisuj ve formátu `M:SS`. Na začátku tedy bude `0:00` (nula minut a nula sekund). Po devadesáti sekundách bude stránka ukazovat `1:30`. (Nezapomeň, že během testování můžeš stopky zrychlit a usnadnit si tak testování větších čísel.)

## Extra bonusy

- Přidej tlačítko `Stop`, které zastaví počítání a stopky vrátí na nulu `0:00`.

- Přidej tlačítko `Pozastavit`, které pozastaví počítání, ale nechá zobrazené poslední číslo. Ověř, že tlačítko `Start` pokračuje od pozastaveného čísla.
