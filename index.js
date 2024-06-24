const quotes = {
    perserverance: [
        "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying 'I will try again tomorrow.\n\n\t--Mary Anne Radmacher, American author and artist.",
        "Many of life's failures are people who did not realize how close they were to success when they gave up.\n\n\t--Thomas Edison (1874-1931), inventor of the light bulb.",
        "Failure is only the opportunity to begin again, this time more intelligently.\n\n\t--Henry Ford (1863-1947), founder of Ford Motor Company",
        "Fall seven times and stand up eight.\n\n\t--Japanese Proverb.",
        "It's not that I'm so smart, it's just that I stay with problems longer.\n\n\t--Albert Einstein (1879-1955), physicist and developer of the theory of relativity.",
        " A failure is not always a mistake. It may simply be the best one can do under the circumstances. The real mistake is to stop trying.\n\n\t--B.F. Skinner (1904-1990), American psychologist.",
        "Ask yourself this question: 'Will this matter a year from now?'\n\n\t--Richard Carlson, American psychotherapist and author of Don't Sweat the Small Stuff.",
        "What if I told you that 10 years from now, your life would be exactly the same? I doubt you'd be happy. So, why are you so afraid of change?\n\n\t--Karen Salmansohn, best-selling self-help author.",
        "As I look back on my life, I realize that every time I thought I was being rejected from something good, I was actually being redirected to something better.\n\n\t--Dr. Steve Maraboli, speaker and author.",
    ],
    bravery: [
        "Fear cuts deeper than swords.\n\n\t-- George R.R. Martin, A Game of Thrones.",
        "Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.\n\n\t-- C. JoyBell C.",
        "you can, you should, and if you’re brave enough to start, you will.\n\n\t--Stephen King, On Writing: A Memoir of the Craft.",
        "Scared is what you're feeling. Brave is what you're doing.\n\n\t--Emma Donoghue, Room.",
        "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.\n\n\t--Nelson Mandela.",
        "It is hard to fail, but it is worse never to have tried to succeed.\n\n\tTheodore Roosevelt.",
        "The biggest adventure you can ever take is to live the life of your dreams.\n\n\t--Oprah Winfrey.",
        "Every person has the power to change their fate if they are brave enough to fight for what they desire more than anything.\n\n\t--Stephanie Garber, Caraval.",
    ],
    happiness: [
        "For every minute you are angry you lose sixty seconds of happiness.\n\n\t--Ralph Waldo Emerson.",
        "Folks are usually about as happy as they make their minds up to be.\n\n\t--Abraham Lincoln.",
        "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.\n\n\t--Chuck Palahniuk, Diary.",
        "Happiness is when what you think, what you say, and what you do are in harmony.\n\n\t--Mahatma Gandhi.",
        "You cannot protect yourself from sadness without protecting yourself from happiness.\n\n\t--Jonathan Safran Foer.",
        "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.\n\n\t--Roy T. Bennett.",
        "If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.\n\n\t--Roy T. Bennett, The Light in the Heart",
    ],
};

function selectRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function main() {
    console.log("Need a bit of motivation?\n");
    console.log("If you are in a period of struggle:\n");
    console.log(selectRandomQuote(quotes.perserverance));

    console.log(
        "\nAre you a bit scared or worried about your current circumstances? Remember:\n"
    );
    console.log(selectRandomQuote(quotes.bravery));

    console.log("\nOr are you maybe feeling down or upset?\n");
    console.log(selectRandomQuote(quotes.happiness));
    console.log();
}

main();
