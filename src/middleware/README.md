# MIDDLEWARE

- [x] getCurrentOS

  <pre>
      현재 사용중인 OS를 호출합니다.
      IOS 또는 ANDRODI에서 다르게 반응하는 경우 해당 함수를 사용하여 분기처리를 추천합니다.
  </pre>

- [x] setItem

  <pre>
      AsyncStorage에 데이터를 저장합니다.
      문자열 데이터 밖에 저장이 안되기 때문에 JSON 데이터인 경우 JSON.stringify를 이용해서 문자열로 바꾸어 주어야 합니다.
  </pre>

  - Usage

  ```js
  import { AsyncStorage } from "{path}/middleware/middleware";

  () => {
  AsyncStorage.setItem("key", "value");
  AsyncStorage.setItem("key", JSON.stringify({"key1": "value1", "key2": "value2"});
  AsyncStorage.setItem("key", "value", () => {
      console.log("callback function");
  });
  }
  ```

- [x] getItem

  <pre>
      AsyncStorage에 저장된 데이터를 불러옵니다.
      문자열로 변경된 JSON 데이터인 경우 JSON.parse를 이용해서 JSON 형태로 다시 바꾸어 주어야 합니다.
  </pre>

  - Usage

  ```js
  import { AsyncStorage } from "{path}/middleware/middleware";

  async () => {
    let data = await AsyncStorage.getItem("key");
    data = JSON.parse(await AsyncStorage.getItem("key"));
    data = await AsyncStorage.getItem("key", () => {
      console.log("callback function");
    });
  };
  ```

- [x] mergeItem

  <pre>
      AsyncStorage에 저장된 JSON 데이터 안의 값을 바꿀 수 있습니다.
      바꾸기 전의 데이터와 바꾸려는 데이터 모두 JSON 데이터이여야 합니다.
  </pre>

  - Usage

  ```js
  import { AsyncStorage } from "{path}/middleware/middleware";

  () => {
  AsyncStorage.setItem("key", JSON.stringify({"key1": "value1", "key2": "value2"}));
  AsyncStorage.mergeItem("key", JSON.stringify({"key2": "value4", "key3": "value3"}));
  AsyncStorage.mergeItem("key", JSON.stringify({"key2": "value4", "key3": "value3"}), () => {
      console.log("callback function");
  });
  let data = JSON.parse(await AsyncStorage.getItem("key"));

  };
  ```

- [x] removeItem

  <pre>
      AsyncStorage에 저장된 데이터를 삭제합니다.
      지정한 key 값에 해당하는 데이터만 지울 수 있습니다.
  </pre>

  - Usage

  ```js
  import { AsyncStorage } from "{path}/middleware/middleware";

  () => {
    AsyncStorage.removeItem("key");
    AsyncStorage.removeItem("key", () => {
      console.log("callback function");
    });
  };
  ```
