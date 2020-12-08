import styled from "styled-components";

const primaryColor = "#FF3838";

export const Sidebar = styled.ul`
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  list-style: none;
`;

export const SidebarItem = styled.li`
  padding: 18px;
  border-radius: 20px;
  background: ${(props) =>
    props.active ? primaryColor : "rgba(255, 255, 255, 0.11)"};
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
  }
`;
