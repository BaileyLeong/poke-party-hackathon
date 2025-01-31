# Pokémon Virtual Pet Game

A fun, interactive game where you can hatch and take care of your very own virtual Pokémon! Manage your Pokémon's hunger, happiness, and level while enjoying engaging animations and an intuitive interface.

---

## Features

### 1. Hatch Your Pokémon

- Start the game with a Pokémon egg.
- Watch the egg **hatch after a 30-second countdown**.
- A random Pokémon is fetched from the [PokéAPI](https://pokeapi.co/) and displayed with its name and sprite.

### 2. Manage Stats

- **Hunger**:
  - Gradually increases over time.
  - If hunger reaches 100, the Pokémon "runs away," and the game restarts.
- **Happiness**:
  - Decreases over time.
  - If happiness drops below 10, the Pokémon becomes "sad."
- **Level**:
  - Increases every 3 training actions.

### 3. Interactive Buttons

- **Feed**:
  - Reduces hunger by 10 points.
  - Triggers a feeding animation.
- **Play**:
  - Increases happiness by 25 points.
  - Triggers a playing animation.
- **Train**:
  - Progresses training and increases level every 3 actions.
  - Triggers a training animation.
- **Instructions**:
  - Button displays a popup with gameplay instructions.

### 4. Engaging Visuals

- Bright and playful design with colors like **lightblue** and **blanchedalmond**.
- Dynamic animations for feeding, playing, and training actions.
- Responsive layout adapts to desktop and tablet screens.

---

## How to Play

1. **Start the Game**:
   - Open the game to see a Pokémon egg.
   - Wait for the countdown to finish as your egg hatches into a random Pokémon.
2. **View Instructions**:
   - Click the "Instructions" button for a popup with gameplay tips.
3. **Care for Your Pokémon**:
   - Use the buttons to feed, play, and train your Pokémon.
   - Balance hunger and happiness to keep your Pokémon happy and healthy.
4. **Level Up**:
   - Train your Pokémon three times to increase its level.
5. **Restart if Needed**:
   - If hunger reaches 100 or happiness reaches 0, your Pokémon "runs away," and the game restarts with a new egg.

---

## Key Skills Demonstrated

- **API Integration**: Fetching and displaying data dynamically.
- **Asynchronous JavaScript**: Using `async/await` for smooth, responsive gameplay.
- **CSS Animations**: Adding dynamic and playful visuals to enhance user experience.
- **Responsive Design**: Optimized for multiple screen sizes.

---

## Live Demo

[Play the game here!](https://baileyleong.github.io/poke-party-hackathon/)

---

## Demo

### Gameplay Screenshots

<img src="https://i.imgur.com/G9Gviur.png" alt="Egg Screen" width="500"> <img src="https://monosnap.com/image/sc3hGDU0xHTSLZurYqAmaHwFieFZol" alt="Button Animations" width="400">

---

## Future Improvements

- Add sound effects for feeding, playing, and training.
- Include more detailed Pokémon stats like HP or attack power.
- Add gameplay functionality to the training feature.

---

## Challenges Faced

### 1. Color Accessibility Concerns

- **Challenge**: Ensuring colors used were accessible and passed contrast ratio checks.
- **Solution**: Validated colors against accessibility standards and adjusted as necessary.

### 2. Instruction Button Alignment

- **Challenge**: Aligning the "Click Here for Instructions" button properly within the layout.
- **Solution**: Adjusted layout properties, including flex and block settings, to ensure proper alignment.

### 3. Responsiveness

- **Challenge**: Making the app responsive across different devices and screen sizes.
- **Solution**: Tested layout on various devices and fixed any discrepancies.

### 4. Collaboration Issues

- **Challenge**: Repeated disconnections during live coding sessions.
- **Solution**: Shared zipped project files and maintained clear communication to prevent loss of progress.

### 5. Debugging Hatching Timer

- **Challenge**: Adding a timer display for the egg-hatching process without breaking functionality.
- **Solution**: Incrementally updated the timer logic and tested it with team feedback.

### 6. Logo Placement Challenges

- **Challenge**: Resizing and positioning the Pokémon logo without overflow issues.
- **Solution**: Used a placeholder while troubleshooting and resolving the issue.

### 7. Duplicated JavaScript Code

- **Challenge**: Identifying and resolving instances of duplicated JavaScript code.
- **Solution**: Reviewed and cleaned the code collaboratively.

---

## Technologies Used

### Frontend

- **HTML5**: For structuring the game interface.
- **CSS3**: For styling and animations.
- **JavaScript**: For game logic and interactivity.

### API Integration

- **[PokéAPI](https://pokeapi.co/)**: To fetch random Pokémon data (name and sprite).

### External Libraries

- **Axios**: For API calls.

---

## File Structure

```
.
├── index.html          # Main HTML file
├── styles/
│   └── poke.css        # CSS for styling
├── scripts/
│   ├── popup.js        # Logic for popup instructions
│   └── scripts.js      # Main game logic
└── assets/
    └── pikachu.jpeg    # Header logo
```

---

## Gameplay Instructions

- **Feed** your Pokémon to reduce hunger.
- **Play** with your Pokémon to increase happiness.
- **Train** your Pokémon to level up.
- **Instructions Button**: Click to view tips and gameplay instructions in a popup.
- Avoid letting hunger max out or happiness drop too low, or your Pokémon will "run away."

---

## Credits

- Developed by **Team Hakachu**.
  - [Bailey Leong | Github](https://github.com/BaileyLeong)
  - [Huma Inayat | Github](https://github.com/fourfifthshuman)
  - [Yoona Oh | Github](https://github.com/yoonaoh312)

## Disclaimer

This project was created for educational purposes as part of the BrainStation diploma program. Pokémon and all related assets are the property of The Pokémon Company. This project is not affiliated with or endorsed by The Pokémon Company.

The PokeAPI was used to access Pokémon data. See [PokeAPI](https://pokeapi.co/) for more details.
