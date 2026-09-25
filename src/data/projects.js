export const projects = [
    {
        id: 1,
        title: "Clicksmith",
        slug: "clicksmith",
        type: "Game",
        technologies: ["Unity", "C#"],
        description:
            "An idle blacksmith game built around forging weapons, progression, upgrades and automation.",
        steamUrl: "https://store.steampowered.com/app/4420910/Clicksmith/?snr=1_7_7_230_150_1",
        image: "/images/HeaderCapsuleClicksmith.png",

        content: [
        {
            type: "text",
            text: "Clicksmith is an idle blacksmith game that I independently developed and published using Unity and C#. The core gameplay revolves around acquiring materials, forging weapons, selling or displaying them, and reinvesting earned resources into upgrades and automation."
        },
        {
            type: "imageText",
            src: "/images/ClicksmithSmithingSystem.png",
            alt: "Clicksmith forging system",
            title: "Forging System",
            text: "Forging forms the main interaction loop of the game. Players use collected materials to create weapons, with the resulting items influenced by progression and rarity systems. The forging process is supported by visual effects, audio feedback and weapon reveal animations."
        },
        {
            type: "imageText",
            src: "/images/ClicksmithUpgradeSystem.png",
            alt: "Clicksmith upgrade system",
            title: "Progression & Upgrades",
            text: "The upgrade system allows players to improve values such as material capacity, customer speed, clicking power and automated production. Upgrade costs scale with progression rather than relying entirely on manually configured prices."
        },
        {
            type: "imageText",
            src: "/images/ClicksmithWeaponStorage.png",
            alt: "Clicksmith weapon storage system",
            title: "Weapon Storage",
            text: "Forged weapons can be stored, displayed or sold, giving the player additional choices and allowing weapons to take part in the wider progression system."
        },
        {
            type: "heading",
            text: "Technical Development"
        },
        {
            type: "text",
            text: "The project contains interconnected systems for progression, weapon generation, customers, upgrades, persistent statistics and UI. As the project grew, I increasingly moved shared gameplay values into centralized systems so that individual features could work with the same underlying state."
        },
        {
            type: "heading",
            text: "Save System"
        },
        {
            type: "text",
            text: "Clicksmith uses a centralized JSON-based save system to persist progression between sessions. Save data from multiple gameplay systems is collected into one structure, serialized and written to Unity's persistent application data directory. The format also includes save versioning for backward compatibility."
        },
        {
            type: "code",
            title: "Saving Game State",
            text: "The current state of the game's persistent systems is collected before being serialized into JSON and written to the existing save file.",
            code: `public static void Save()
{
    EnsureSaveFileExists();
    HandleSaveData();

    string json =
        JsonUtility.ToJson(_saveData, true);

    File.WriteAllText(
        SaveFileName(),
        json
    );
}`
        },
        {
            type: "code",
            title: "Loading Game State",
            text: "The stored JSON is restored into SaveData, migrated when necessary and then passed back to the individual gameplay systems.",
            code: `_saveData =
    JsonUtility.FromJson<SaveData>(
        File.ReadAllText(SaveFileName())
    );

MigrateSaveData(ref _saveData);
HandleLoadData();`
        },
        {
            type: "imageText",
            src: "/images/ClicksmithTestingGround.png",
            alt: "Clicksmith Testing Dummies update",
            title: "Post-Launch Development",
            text: "Development continued after release with additional systems such as Testing Dummies. This mechanic introduces a risk-and-reward loop where repeated testing increases potential rewards while also increasing the chance of failure."
        },
        {
            type: "heading",
            text: "What I Learned"
        },
        {
            type: "text",
            text: "Maintaining Clicksmith as its number of interconnected systems increased taught me the importance of separating gameplay logic, persistent data and presentation. It also gave me experience maintaining backward-compatible save data, adding new systems without breaking existing player progress and supporting a released project through post-launch updates."
        }
        ]
    },

    {
        id: 2,
        title: "WreckingBall",
        slug: "wreckingball",
        type: "Game",
        technologies: ["Unity", "C#"],
        description:
            "A physics-based roguelike built around completing rooms with a single carefully planned shot.",
        steamUrl: "https://store.steampowered.com/app/4860390/WreckingBall/",
        image: "/images/HeaderCapsuleWreckingBall.png",

        content: [
        {
            type: "text",
            text: "WreckingBall is a physics-based roguelike that I independently developed in Unity using C#. Each room gives the player a limited opportunity to reach the objective, making positioning, physics and the correct use of abilities central to each attempt."
        },
        {
            type: "imageText",
            src: "/images/WreckingBallGameplay.png",
            alt: "WreckingBall gameplay",
            title: "Physics-Based Gameplay",
            text: "The main gameplay is built around Unity's 2D physics system. The ball interacts with walls, obstacles and room geometry while the game tracks movement, collisions and the conditions required to complete or fail the room."
        },

        {
            type: "heading",
            text: "Documentation & Project Planning"
        },
        {
            type: "imageText",
            src: "/images/WreckingBallDocumentation.png",
            alt: "WreckingBall project documentation",
            title: "Planning the Project",
            text: "Documentation was a major part of WreckingBall's development. The project included a Game Design Document, Game Vision Document, Technical Design Document, Project Management Plan, roadmap, Work Breakdown Structure, risk documentation, scope definition and marketing plan."
        },
        {
            type: "text",
            text: "The documentation was used throughout development to define scope, identify risks, structure milestones and compare the final implementation against the original plan. Keeping the project deliberately limited helped focus development around a small number of mechanics rather than uncontrolled feature growth."
        },

        {
            type: "imageText",
            src: "/images/WreckingBallSelectionScreen.png",
            alt: "WreckingBall ability selection",
            title: "Ability Selection",
            text: "Abilities modify how the player can interact with the ball and environment. They include teleportation, firing again while moving, placing temporary geometry, passing through obstacles, closing the previous doorway and splitting the ball."
        },
        {
            type: "heading",
            text: "Ability System"
        },
        {
            type: "code",
            title: "Teleport Ability",
            text: "Individual abilities contain their own behaviour. Teleportation only succeeds when the cursor is positioned over a valid tile on layer 12.",
            code: `Vector2 position =
    Camera.main.ScreenToWorldPoint(
        Input.mousePosition
    );

Collider2D tile =
    Physics2D.OverlapPoint(
        position,
        1 << 12
    );

if (tile != null)
    ball.transform.position = position;`
        },

        {
            type: "heading",
            text: "Room Progression"
        },
        {
            type: "text",
            text: "Completing a room stores it in the run history, clears temporary objects and prepares the game for the next room selection. The timer, abilities and ball state are reset between challenges."
        },
        {
            type: "code",
            title: "Completing a Room",
            text: "The completion flow resets the current challenge and prevents gameplay from continuing until another room has been selected.",
            code: `OldRooms.Add(currentRoom);

ClearSpawnables();
ResetTimer();
ResetAbilities();

roomSelected = false;
ballState = BallState.SelectingRoom;

GenerateNextRoom();`
        },

        {
            type: "heading",
            text: "What I Learned"
        },
        {
            type: "text",
            text: "WreckingBall gave me more experience designing systems around unpredictable physics while still maintaining controlled game states and rules. More importantly, it allowed me to apply structured project-management and technical documentation to a complete game project and compare the planned scope against the final implementation."
        }
        ]
    },

    {
        id: 3,
        title: "Cosmo's Industry",
        slug: "cosmos-industry",
        type: "Game",
        technologies: ["Unity", "C#"],
        description:
            "A space-themed shop-management game combining gathering, crafting and selling.",
        steamUrl: "https://store.steampowered.com/app/3330510/Cosmos_Industry/",
        image: "/images/HeaderCapsuleCosmosIndustry.jpg",

        content: [
        {
            type: "text",
            text: "Cosmo's Industry is a space-themed shop-management game developed in Unity using C#. The player gathers or purchases resources, turns them into products through crafting activities and sells those products through their shop."
        },
        {
            type: "imageText",
            src: "/images/CosmosIndustrySelling.png",
            alt: "Cosmo's Industry shop and selling system",
            title: "Shop & Selling",
            text: "The shop system connects produced items to the game's economy. Players prepare products for sale and use the resulting resources to continue gathering and crafting."
        },
        {
            type: "imageText",
            src: "/images/CosmosIndustryMinigames.png",
            alt: "Cosmo's Industry crafting minigames",
            title: "Crafting Minigames",
            text: "Crafting is represented through interactive minigames rather than being handled entirely through menus. These activities connect player input with the production of items that later feed into the shop-management loop."
        },
        {
            type: "imageText",
            src: "/images/CosmosIndustryStorage.png",
            alt: "Cosmo's Industry resource storage",
            title: "Resources & Storage",
            text: "Resources and finished products are shared between gathering, crafting, storage and selling systems. Changes made by one system therefore need to remain synchronized with the rest of the game."
        },
        {
            type: "heading",
            text: "Interconnected Systems"
        },
        {
            type: "text",
            text: "Cosmo's Industry required multiple gameplay systems to operate on the same resources and shared state. Inventory, crafting, selling and UI all needed to remain synchronized while reacting to changes made elsewhere in the game."
        },
        {
            type: "heading",
            text: "What I Learned"
        },
        {
            type: "text",
            text: "As one of my earlier larger Unity projects, Cosmo's Industry showed me how quickly tightly coupled gameplay systems become difficult to maintain. Many of the lessons from this project influenced the more modular state and system designs I later used in Clicksmith and WreckingBall."
        }
        ]
    },

    {
        id: 4,
        title: "Procedural Deformation Animation",
        slug: "squash-stretch",
        type: "Unity Tool",
        technologies: ["Unity", "C#"],
        description:
            "A reusable Unity component for procedural squash, stretch and bounce animations without requiring individual animation clips.",
        steamUrl: null,
        image: "/images/StretchAndSquish.gif",

        content: [
        {
            type: "text",
            text: "This project is a reusable Unity component for adding procedural squash-and-stretch animation to gameplay objects and UI elements. It was created to provide quick visual feedback without requiring a separate hand-authored animation clip for every interaction."
        },
        {
            type: "imageText",
            src: "/images/StretchAndSquishModes.png",
            alt: "Different squash and stretch animation modes",
            title: "Multiple Animation Styles",
            text: "The component includes built-in animation styles such as Basic, Snappy, Overshoot and Bounce. Each mode uses different curve and repetition settings while sharing the same underlying animation system."
        },
        {
            type: "imageText",
            src: "/images/StretchAndSquishInspector.png",
            alt: "Squash and stretch component settings in Unity",
            title: "Configurable Behaviour",
            text: "Animation behaviour can be configured directly from the Unity Inspector, including strength, duration, affected axes, repetitions and reverse-axis deformation."
        },

        {
            type: "heading",
            text: "Procedural Animation"
        },
        {
            type: "text",
            text: "Instead of playing predefined animation clips, the component calculates deformation at runtime. AnimationCurve values control how strongly each animation step affects the object's original scale."
        },
        {
            type: "code",
            title: "Applying the Animation",
            text: "The selected animation curve is evaluated over normalized time and used to scale the deformation calculated for the current animation step.",
            code: `float normalizedTime =
    elapsedTime / step.StepDuration;

float curveValue =
    animationCurve.Evaluate(normalizedTime);

Vector3 deformation =
    step.StepDeformation * curveValue;

transform.localScale =
    Vector3.Scale(
        originalScale,
        Vector3.one + deformation
    );`
        },
        {
            type: "code",
            title: "Generating Deformation",
            text: "Each animation step calculates its strength, duration and deformation based on the selected axis and repetition settings.",
            code: `float strength =
    baseStrength *
    Mathf.Pow(
        repeatStrengthMultiplier,
        step
    );

Vector3 reverseAxis =
    Vector3.one - axisMask;

Vector3 deformation =
    axisMask * strength
    - reverseAxis
    * strength
    * reverseAxisStrength;`
        },

        {
            type: "heading",
            text: "Modes & Presets"
        },
        {
            type: "text",
            text: "Animation behaviour is stored in reusable Mode values containing an AnimationCurve together with repetition, strength, timing, reverse-axis and minimum-scale settings. Built-in modes are generated by the system while custom modes can be stored in a ScriptableObject library."
        },
        {
            type: "code",
            title: "Reusable Mode Library",
            text: "Custom animation modes are stored separately from the animation component so the same configuration can be reused by multiple objects.",
            code: `[SerializeField]
private List<Mode> customModes = new();

public IReadOnlyList<Mode> CustomModes
    => customModes;

public void AddMode(Mode mode)
{
    customModes.Add(mode);
}`
        },

        {
            type: "heading",
            text: "What I Learned"
        },
        {
            type: "text",
            text: "Unlike my larger games, this project was focused on designing one small system to be reusable, configurable and easy to integrate. It gave me practical experience separating runtime behaviour from reusable configuration data and designing components intended to work across unrelated gameplay objects."
        }
        ]
    }
];