import {useQuery, useReactiveVar} from '@apollo/client';
import React from 'react';
import {View} from 'react-native';
import TodoItem from './TodoItem';
import {GET_TODOS} from './queries.todo';
import {todoVar} from './store';

export default (): React.FC => {
  const todos = useReactiveVar(todoVar);
  // const {data: {getTodos} = {}} = useQuery(GET_TODOS);

  // 1) useQuery로 데이터를 가져올 수도 있지만, 서버의 데이터와 함께 가져오는 것이 아니라면,
  // useReactiveVar를 통해 직접 반응변수에서 상태를 가져오는 것이 좋다.
  // 이 경우에는 cache를 정의하지 않아도 되고, query를 작성하지 않아도 된다.(queries.todo.ts)

  // 2) 또한 useQuery를 사용하면, Todo 데이터가 변경될 때마다 해당 쿼리를 사용하는 모든 컴포넌트가 다시 렌더링되지만,
  // useReactiveVar를 사용하면 독립적이므로 경제적이다.

  return (
    <View>
      {/* {getTodos.map((todo, index) => ( */}
      {todos?.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </View>
  );
};
