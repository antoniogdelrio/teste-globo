import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { NewsCard } from "../src/components/NewsCard";

const MOCK = {
  image: "https://s2.glbimg.com/VwOIn5hV9oVR9qWdJ8AIL1xDcVQ=/0x100:3000x1788/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/M/S/CD6mLRReCk0O1GnhQhgw/foto-.jpg",
  section: "Planeta Bizarro",
  summary: "Imprensa russa localizou autor da mensagem.",
  title: "Americano acha mensagem em garrafa lançada ao mar 50 anos atrás por marinheiro russo",
  url: "https://g1.globo.com/planeta-bizarro/noticia/2019/08/19/americano-acha-mensagem-em-garrafa-lancada-ao-mar-50-anos-atras-por-marinheiro-russo.ghtml",
  video: {
    "duration": 653000,
    "programTitle": "Jornal Hoje",
    "source": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  groups: [],
  type: "materia",
  created: "2019-08-19T10:24:05.990Z",
  id: "3bc11e9a796012beb7b277b93519558d"
}

describe("<NewsCard />", () => {

  it("should display video icon if news isVideo", () => {
    render(<NewsCard
      imageURL={MOCK.image}
      url={MOCK.url}
      title={MOCK.title}
      isVideo={MOCK.video}
    />);

    expect(screen.getByTestId('video-icon')).toBeInTheDocument()
  });

  it("should not display video icon if news isVideo", () => {
    render(<NewsCard
      imageURL={MOCK.image}
      url={MOCK.url}
      title={MOCK.title}
      isVideo={null}
    />);

    expect(screen.queryByTestId('video-icon')).not.toBeInTheDocument()
  });
});