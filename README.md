# year_bm_ebil_addon
Dieses Bookmarklet ist ein Addon für das Bilanzanalyse Tool EBIL zur Markierung des Vorjahres.
Bei der Eingabe von Vorjahresdaten in EBIL ist es möglich die Spalte Vorjahr und aktuelles Jahr zu vertauschen um bspw. Detaildaten einzugeben. Durch diese Funktion ist nicht sofort ersichtlich, welche Spalte das Vorjahr betrifft. Insbesondere dann nicht, wenn die Spaltenüberschrift nicht mehr sichtbar ist, weil man bereits zu weit nach unten gescrollt hat. Dieses Tool sorgt dafür, dass die Vorjahresfelder unabhängig davon in welcher Spalte sie sich befinden rot markiert werden und damit sofort und immer ersichtlich ist ob dies ein Feld des Vorjahres ist oder nicht.

## Demo

  * [Zur Demo hier.](http://jsfiddle.net/jschyma/waznppff/embedded/result/)
  
## Wie funktioniert das Bookmarklet?<a name="function"></a>
Die Funktionalität, der Programmcode, wird dabei in einem Bookmark (Favoriten Einträg) hinterlegt und bei Bedarf durch Aufruf des Bookmarks während der Arbeit mit EBIL gestartet.

Im folgenden wird anhand von Screenshots in einer Schritt zu Schritt Anleitung die Benutzung des Addons dargestellt und erklärt. Für Informationen bezüglich der Installation des Bookmarklet für EBIL springen Sie bitte direkt zum Punkt [Installieren](#install). Das Bookmarklet für EBIL ist in der folgenden Anleitung bereits installiert.

1. Sie befinden sich auf der Seite von EBIL. Die Arbeit mit EBIL führen Sie wie gewohnt durch. Sie haben die Änderung der Vorjahresdaten aktiviert und möchten nun die Vorjahresspalte farblich markieren.
2. **Starten** Sie das Bookmarklet durch einen **Klick** auf den bereits im Punkt [Installieren](#install) angelegten **Favoriteneintrag**.
 
 ![Lesezeichenmenü](/../master/docs/firefox_ready.PNG?raw=true "Favoriten Eintrag")
3. Alle Vorjahres Felder werden farblich rot markiert, unabhängig davon ob sich das Vorjahr aktuell in der rechten oder linken Spalte befindet.
 
 ![Lesezeichenmenü](/../master/docs/year_bm_ebil_addon.png?raw=true "Oberfläche")
4. Bei einem Wechsel des Tabreiters (Aktiva, Passiva, GuV, ...) verschwindet die Markierung => Das Bookmarklet muss erneut gestartet werden wie in Punkt 2 beschrieben.

## Installieren<a name="install"></a>
Zur Installation müssen Sie in Ihrem Browser einen **neuen Favoriteneintrag anlegen**. Nennen Sie diesen bspw. EBIL Vorjahr markieren. In das Adressen/URL Feld des Favoriteneintrags **kopieren** sie Bitte die folgende Zeile. Speichern Sie diesen neuen Eintrag. Ihr Bookmarklet für EBIL ist nun einsatzbereit.
```
javascript:%20(function%20(){function%20MyYear(){var%20vorjahr%20=%20parseInt($("#stichtagVJ").text().replace(/\s*/g,"").substr(14));var%20jahr%20=%20parseInt($("#stichtag").text().replace(/\s*/g,"").substr(14));var%20css%20=%20"";if(vorjahr<jahr){css%20=%20".vorgaenger%20input{border-color:red;}";}else{css%20=%20"td:not(.vorgaenger)%20input{border-color:red;}";}var%20c=document.createElement("style");$(c).attr("type","text/css").html(css);$("head").append(c);}MyYear();}());
```

####Eine Schritt zu Schritt Anleitung für Firefox erhalten Sie hier:

1. Firefox Lesezeichen Menü starten.
 
 ![Lesezeichenmenü](/../master/docs/firefox_fav.PNG?raw=true "Optional Title")
 ![Lesezeichenmenü](/../master/docs/firefox_fav_verw.PNG?raw=true "Optional Title")
2. Neues Lesezeichen anlegen.
 
 ![Lesezeichenmenü](/../master/docs/firefox_fav_verw_3.PNG?raw=true "Optional Title")
3. Namen vergeben.
4. In das Feld Adresse/URL den oben stehenden Text vollständig kopieren.
 
 ![Lesezeichenmenü](/../master/docs/firefox_fav_neu.PNG?raw=true "Optional Title")
5. Lesezeichen Menü beenden.
6. Das Lesezeichen ist angelegt und kann verwendet werden.
 
 ![Lesezeichenmenü](/../master/docs/firefox_ready.PNG?raw=true "Optional Title")

## Lizenz
Das Vorjahres Bookmarklet für EBIL ist nach [AGPL](LICENSE)lizenziert und damit frei für die Verwendung von jedem für den dieses Tool nützlich ist.

Entwickelt wurde das Vorjahres Bookmarklet für EBIL von Jens Schyma.
## Weiterentwicklung/Contribution
Zusätzliche Anregungen bezüglich Funktionalität oder Weiterentwicklungen des Programmcodes sind gerne willkommen. Nutzen Sie dazu Bitte die Funktionen Issues und Pull Requests.

## Links
  * [weiteres Addon für EBIL - Calc Bookmarklet für EBIL](https://github.com/jschyma/calc_bm_ebil_addon/blob/master/README.md)
  * [EBIL](http://www.ebil.de)