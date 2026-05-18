# home-custom
tabby plugin

> **This plugin is an extended fork of [tabby-home](https://www.npmjs.com/package/tabby-home) by its original author. All core functionality belongs to them — this fork adds extra features on top.**

A connection manager home panel plugin for [Tabby](https://tabby.sh) — organize and manage all your SSH, Telnet, and Serial connections in one place.

## Features

All features from the original [tabby-home](https://www.npmjs.com/package/tabby-home), plus:

- **Multi-selection with keyboard modifiers** — select multiple hosts using `Ctrl+Click`, `Cmd+Click` (macOS), or `Shift+Click` for range selection
- **Jump Host support** — assign a jump host (bastion) to any server: create a new one or reuse an existing SSH profile
- **Bulk credential editing** — when multiple hosts are selected, update username and/or password across all of them at once

---

### Original features

- **Connection panel** — opens automatically on startup as a home tab
- **Groups** — organize hosts into color-coded groups with nested navigation
- **Smart search** — filter by name, host, username, tag, group, or connection type using query syntax
- **Sort** — sort by default order, alphabetical name, or most recently connected
- **Grid / List view** — toggle between card grid and compact list layout
- **Connection status** — ping all hosts to check online/offline status at a glance
- **Selection mode** — select multiple hosts to open tabs, split panes, or launch MultiExec
- **MultiExec** — broadcast commands to multiple SSH sessions simultaneously in a split-pane view
- **Drag & drop** — reorder hosts, move between groups, or drag into a MultiExec tab
- **Import / Export** — backup and restore connections as JSON
- **Hotkey** — configurable keyboard shortcut to jump to the connection panel
- **Vault integration** — credentials (password, private key, passphrase) stored securely in Tabby's vault

## Installation

Inside Tabby, go to **Settings → Plugins** and search for `home-custom`, then click **Install**.

Or install manually:

```bash
# Windows
cd %APPDATA%\tabby\plugins
npm install home-custom

# macOS / Linux
cd ~/.config/tabby/plugins
npm install home-custom
```

Restart Tabby after installation.

## New Features Usage

### Multi-selection with keyboard modifiers

Use keyboard modifiers while clicking hosts to build a selection without switching to Selection Mode:

| Shortcut | Behavior |
|----------|----------|
| `Ctrl + Click` | Toggle a single host in/out of selection |
| `Cmd + Click` *(macOS)* | Toggle a single host in/out of selection |
| `Shift + Click` | Select a range between the last selected and clicked host |

### Jump Host

Right-click a host (or use the ⋮ menu on the card) and choose **Set Jump Host**:

- **New jump host** — fill in host, port, and credentials to create a fresh bastion entry
- **Existing profile** — pick any SSH profile already saved in Tabby as the jump host

The jump host is shown as a badge on the host card and is used transparently when connecting.

### Bulk Credential Editing

1. Select two or more hosts (via Selection Mode or keyboard modifiers)
2. Click the **Edit credentials** button that appears in the toolbar
3. Enter a **username** and/or **password** — only non-empty fields are applied, leaving other hosts' values untouched

## Search Query Syntax

Type in the search box to filter hosts. Supports:

| Syntax | Description |
|--------|-------------|
| `type:ssh` | Filter SSH connections |
| `type:telnet` | Filter Telnet connections |
| `type:serial` | Filter Serial connections |
| `name:web` | Filter by host name |
| `user:admin` | Filter by username |
| `tag:prod` | Filter by tag |
| `group:dc1` | Filter by group name |
| `web && prod` | Match ALL terms (AND) |
| `web \|\| db` | Match ANY term (OR) |

Type `/` at the end of your query to show the suggestion dropdown.

## MultiExec

MultiExec lets you run commands on multiple servers at the same time:

1. Open connection panel → enable **Selection mode** → select hosts → click **MultiExec**
2. Or right-click a group → **Open all (MultiExec)**
3. Or drag a host card from the panel onto a MultiExec tab header

In the MultiExec tab, type a command in the broadcast bar and press **Enter** to send it to all selected panes simultaneously.

## Hotkey

Go to **Settings → Hotkeys** and assign a shortcut to `connection-manager-open` to quickly switch back to the home panel from any tab.

## Credits

Based on [tabby-home](https://www.npmjs.com/package/tabby-home) — all core features and architecture are from the original plugin. This fork only extends it with additional functionality.

## License

MIT
