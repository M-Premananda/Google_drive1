import React from "react";
import styled from "styled-components";
import FileIcons from "../common/FileIcons";

const RecentDataGrid = ({ files }) => {
  return (
    <DataGrid>
      {files.slice(0, 10).map((file) => (
        <DataFile
          key={file.id}
          href={file.data.fileURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileIcons type={file.data.contentType} />
          <p title={file.data.filename}>{file.data.filename}</p>
        </DataFile>
      ))}
    </DataGrid>
  );
};

export default RecentDataGrid;

// ✅ Styles
const DataGrid = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  overflow: hidden;

  /* 🖥 Desktop — use normal grid layout */
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    overflow: visible;
  }

  /* 📱 Mobile — horizontal scroll */
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 16px;
    padding: 10px 8px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const DataFile = styled.a`
  text-align: center;
  border: 1px solid rgb(204 204 204 / 46%);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 12px 0 0 0;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.3s, color 0.3s, border-color 0.3s;
  flex: 0 0 48%;
  scroll-snap-align: start;
  max-width: 250px;

  &:hover {
    transform: translateY(-4px);
  }

  svg {
    font-size: 50px;
    color: gray;
    transition: color 0.3s;
  }

  p {
    color: #111827;
    font-weight: 600;
    font-size: 13px;
    border-top: 1px solid #e5e7eb;
    margin-top: 6px;
    background: #f9fafb;
    padding: 10px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: background 0.3s, color 0.3s, border-color 0.3s;
  }

  /* 🌙 Dark Mode Support */
  @media (prefers-color-scheme: dark) {
    background: #1f2937;
    border-color: #374151;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);

    svg {
      color: #9ca3af;
    }

    p {
      background: #111827;
      color: #e5e7eb;
      border-top-color: #374151;
    }

    &:hover {
      transform: translateY(-4px);
      background: #2d3748;
    }
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 48%;
  }

  @media screen and (max-width: 480px) {
    flex: 0 0 85%;
  }
`;
