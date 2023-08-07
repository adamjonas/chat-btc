import { AuthorConfig } from "@/types";

export const AUTHOR_QUERY = "author"

const authorsConfig: AuthorConfig[] = [
  {
    name: "Holocat",
    title: "Your Bitcoin Companion",
    introduction: "Hi, I'm a holocat. I've read every single mailing post and every stackexchange question, so you can ask me just about anything. To activate me, boop me on the nose. What's your question?",
    slug: "holocat",
    value: "",
    imgURL: "/images/authors/holocat.jpg",
    questions: [
      "How is bitcoin's 21 million supply cap enforced?",
      "What are sighashes?",
    ],
  },
  {
    name: 'Matt Corallo Bot',
    slug: "matt-corallo",
    title: "LDK & Bitcoin Core Dev",
    introduction: "I'm BlueMatt. I used to work on Bitcoin Core and now I work on the Lightning Development Kit at Spiral. You can ask me about Bitcoin Core, Lightning or even my thoughts around miner decentralization.",
    value: "Matt Corallo",
    imgURL: "/images/authors/matt_corallo.jpg",
    questions: [
      "What is broken about the lightning network?",
      "Why is miner decentralization important?"
    ],
  },
  {
    name: "Andrew Chow Bot",
    title: "Bitcoin Core Maintainer",
    introduction: "Hi, I'm achow. I'm a Bitcoin Core maintainer and work on the Hardware Wallet Interface. My focus is on wallet functionality and interoperability between different wallet software.",
    slug: "achow",
    value: "Andrew Chow",
    imgURL: "/images/authors/andrew_chow.jpg",
    questions: [
      "What are Partially Signed Bitcoin Transactions used for?",
      "What are the advantages of descriptor wallets over legacy wallets?",
    ],
  },
  {
    name: "Greg Maxwell Bot",
    slug: "greg-maxwell",
    title: "Bitcoin Core Contributor",
    introduction: "Hello, I'm Greg. While I was a prolific bitcoin contributor to Bitcoin Core, I no longer actively work on the project.",
    value: "Greg Maxwell",
    imgURL: "/images/authors/greg_maxwell.jpg",
    questions: [
      "What benefits does Graftroot offer over Taproot?",
      "What is a Confidential Transaction?",
    ],
  },
  {
    name: "Olaoluwa Osuntokun Bot",
    title: "Lightning Eng",
    introduction: "Hi, I'm Roasbeef. I'm the CTO of Lightning Labs and live on the edge of all things Lightning.",
    slug: "olaoluwa-osuntokun",
    value: "Olaoluwa Osuntokun",
    imgURL: "/images/authors/olaoluwa_osuntokun.jpg",
    questions: [
      "What problems do atomic multi-path payments address?",
      "What are some methods to improve the security of the lightning network?",
    ],
  },
  {
    name: "Murch Bot",
    title: "Bitcoin Wallet Dev & Writer",
    introduction: "I'm Murch Bot. Murch contributes to the Bitcoin Core wallet, moderates Bitcoin Stack Exchange, writes and hosts podcasts.",
    slug: "murch",
    value: "Mark Erhardt",
    imgURL: "/images/authors/mark_erhardt.jpg",
    questions: [
      "How is coin selection done in Bitcoin Core?",
      "What is meant by UTXO management?",
    ],
  },
  {
    name: "Andreas Antonopoulos Bot",
    title: "Speaker & Educator",
    introduction: "Hi, I'm Andreas. I've been giving talks about bitcoin long before anyone was ready to listen.",
    slug: "andreas-antonopoulos",
    value: "Andreas Antonopoulos",
    imgURL: "/images/authors/andreas_antonopoulos.jpg",
    questions: [
      "What are the advantages of Schnorr signatures over ECDSA?",
      "Is is seed splitting a good idea?",
    ],
  }
];

export default authorsConfig;

export const deriveAuthorIntroduction = (authorname: AuthorConfig["name"]) => {
  const firstName = authorname.trim().split(" ")[0];
  return `Hi, I'm ${firstName}! What can I help with?`
}
