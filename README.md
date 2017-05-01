# prism.js openhab

OpenHAB configuration file syntax highlighting for prism (https://github.com/PrismJS/prism).

## Work in progress

This project is work in progress, so some highlighting may missing.

## Installation

Just drop the `language.js` in your project and use the class `language-openhab`. Example:

```
<pre class="line-numbers language-openhab">
    <span class="filename">rules/raumfeld_buero.rules</span>
    <code>
        rule "Raumfeld Lautstärke: Nur Büro und Fitness 60%"
        when
            Item item_all_raumfeld_volume_nur_buero_fitness_60 changed to ON
        then
            callScript("raumfeld_all_set_volume_nur_buero_fitness_60");

            postUpdate(item_all_raumfeld_volume_nur_buero_fitness_60, OFF);
        end
    </code>
</pre>
```

## Screenshots

![Screenshot 1](screenshots/screenshot-1.png "Screenshot 1")

![Screenshot 2](screenshots/screenshot-2.png "Screenshot 2")

![Screenshot 3](screenshots/screenshot-3.png "Screenshot 3")

![Screenshot 4](screenshots/screenshot-4.png "Screenshot 4")

![Screenshot 5](screenshots/screenshot-5.png "Screenshot 5")

![Screenshot 6](screenshots/screenshot-6.png "Screenshot 6")