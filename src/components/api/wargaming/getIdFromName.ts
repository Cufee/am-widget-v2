import { ApiResponse } from "../core/types/ApiResponse";
import getDomainFromRealm from "./core/getDomainFromRealm";

export default async function getIdFromName(
  name: string,
  realm: string
): Promise<ApiResponse> {
  if (!name || !realm) {
    return {
      error: {
        message: "Player name and realm are required",
      },
    };
  }
  try {
    const search = new URLSearchParams({
      application_id: process.env.REACT_APP_WARGAMING_APP_ID || "",
      search: name,
      limit: "1",
    });

    const response = await fetch(
      `https://${getDomainFromRealm(realm)}/${
        process.env.REACT_APP_WARGAMING_INFO_PATH
      }/?${search.toString()}`
    );

    const json = await response.json();

    if (json.status !== "ok") {
      return {
        error: {
          message: "Failed to find a player by name",
          context: json.error.message,
        },
      };
    }
    if (
      !json.data?.[0]?.account_id ||
      json.data?.[0]?.nickname?.toLocaleLowerCase() !== name.toLocaleLowerCase()
    ) {
      return {
        error: {
          message: "No player found with name " + name,
        },
      };
    }
    return {
      data: json.data[0].account_id,
    };
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: "Failed to reach Wargaming API",
        context: `${error}`,
      },
    };
  }
}
