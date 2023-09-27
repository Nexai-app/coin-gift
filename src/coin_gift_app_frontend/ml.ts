import {
  pipeline,
  Tensor,
  Pipeline,
  env,
} from "@xenova/transformers";

let extractor: null | Pipeline = null;

export const useEmbeddQ = () => {
  let embeddedQ = [];
  try {
    const call = async (question: string) => {
      const embedding = await useEmbedder(question);
      if (embedding == null) {
        console.log("no embedding");
        return;
      }
      const e = embedding.tolist()[0];
      if (e.length != 384) {
        console.log("Embedding size not correct");
     

        return;
      }
      embeddedQ.push(e);
      // console.log("thier place", embeddedQ);
      return e;
    };
    return { call, embeddedQ };
  } catch (err) {
    console.log(err);
  }
};

const useEmbedder = async (text: string) => {
  if (extractor == null) {
    return;
  }

  let res: Tensor = await extractor(text, {
    pooling: "mean",
    normalize: true,
  });
  return res;
};

export const useInitTransformers = () => {

  const init = async () => {
    // @ts-ignore
    env.allowLocalModels = false;
    //only run if pipeline hasn't been initialized
      extractor = await pipeline(
        "feature-extraction"
        // "Xenova/all-mpnet-base-v2"
      );

        console.log("typeof", extractor, typeof extractor);
        return;
    
    }
  
  return { init };
};
