export const panelsDemo = /*html*/ `
  <section class="component-container">
    <h2>Panels</h2>
    <section class="component-example">
      <p>Default Panels</p>
      <vscode-panels>
        <vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
        <vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
        <vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
        <vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
        <vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
        <vscode-panel-view id="view-2">Output content.</vscode-panel-view>
        <vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
        <vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
      </vscode-panels>
    </section>
    <section class="component-example">
      <p>With Active Tab</p>
      <vscode-panels activeid="tab-4">
        <vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
        <vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
        <vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
        <vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
        <vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
        <vscode-panel-view id="view-2">Output content.</vscode-panel-view>
        <vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
        <vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
      </vscode-panels>
    </section>
    <section class="component-example">
      <p>With Disabled</p>
      <vscode-panels>
        <vscode-panel-tab id="tab-1" disabled>PROBLEMS</vscode-panel-tab>
        <vscode-panel-tab id="tab-2" disabled>OUTPUT</vscode-panel-tab>
        <vscode-panel-tab id="tab-3" disabled>DEBUG CONSOLE</vscode-panel-tab>
        <vscode-panel-tab id="tab-4" disabled>TERMINAL</vscode-panel-tab>
        <vscode-panel-view id="view-1"> Problems Content </vscode-panel-view>
        <vscode-panel-view id="view-2"> Output Content </vscode-panel-view>
        <vscode-panel-view id="view-3"> Debug Console Content </vscode-panel-view>
        <vscode-panel-view id="view-4"> Terminal Content </vscode-panel-view>
      </vscode-panels>
    </section>
    <section class="component-example">
      <p>With Badge</p>
      <vscode-panels>
        <vscode-panel-tab id="tab-1">
          PROBLEMS
          <vscode-badge appearance="secondary">1</vscode-badge>
        </vscode-panel-tab>
        <vscode-panel-tab id="tab-2">
          OUTPUT
          <vscode-badge appearance="secondary">1</vscode-badge>
        </vscode-panel-tab>
        <vscode-panel-tab id="tab-3">
          DEBUG CONSOLE
        </vscode-panel-tab>
        <vscode-panel-tab id="tab-4">
          TERMINAL
          <vscode-badge appearance="secondary">1</vscode-badge>
        </vscode-panel-tab>
        <vscode-panel-view id="view-1"> Problems Content </vscode-panel-view>
        <vscode-panel-view id="view-2"> Output Content </vscode-panel-view>
        <vscode-panel-view id="view-3"> Debug Console Content </vscode-panel-view>
        <vscode-panel-view id="view-4"> Terminal Content </vscode-panel-view>
      </vscode-panels>
    </section>
  </section>
`;
